import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    // Basic Campaign Info
    campaignId: {
      type: String,
      unique: true,
      required: true,
      default: () =>
        `CAMP_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    },

    // Brand Details
    brandDetails: {
      brandName: {
        type: String,
        required: true,
        trim: true,
      },
      brandEmail: {
        type: String,
        required: true,
        lowercase: true,
      },
      brandGoals: {
        type: String,
        required: true,
      },
      targetCustomer: {
        type: String,
        required: true,
      },
      contactPerson: {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        role: {
          type: String,
          required: true,
          enum: [
            "founder",
            "marketing-head",
            "marketing-manager",
            "brand-manager",
            "digital-marketing",
            "social-media",
            "other",
          ],
        },
        phone: {
          type: String,
          required: true,
          match: [
            /^[+]?[0-9\s\-\(\)]{10,}$/,
            "Please enter a valid phone number",
          ],
        },
      },
    },

    // Campaign Setup
    campaignSetup: {
      budget: {
        type: Number,
        required: true,
      },
      campaignType: {
        type: String,
        required: true,
        enum: ["mass", "specific"],
      },
      creatorTier: {
        type: String,
        required: true,
        enum: ["micro", "medium", "small"],
      },
    },

    // Brief Details
    briefDetails: {
      productName: {
        type: String,
        required: true,
        trim: true,
      },
      messaging: {
        type: String,
        required: true,
      },
      deliverables: {
        type: String,
        required: true,
      },
      timeline: {
        type: String,
        required: true,
      },
      files: [
        {
          fileName: String,
          fileUrl: String,
          fileType: String,
          fileSize: Number,
          uploadedAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },

    // Creators & Selection
    creators: {
      shortlistedCreators: [
        {
          creatorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Creator",
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          status: {
            type: String,
            enum: ["shortlisted", "selected", "rejected", "completed"],
            default: "shortlisted",
          },
          addedAt: {
            type: Date,
            default: Date.now,
          },
          notes: String,
        },
      ],
      totalCreators: {
        type: Number,
        default: 0,
      },
      selectedCreators: {
        type: Number,
        default: 0,
      },
    },

    // Payment Information (corrected)
    payment: {
      totalAmount: {
        type: Number,
        required: true,
        min: 0,
      },
      platformFee: {
        type: Number,
        default: 0,
      },
      finalAmount: {
        type: Number,
        // Removed required since it's calculated
      },
      paymentStatus: {
        type: String,
        enum: ["pending", "processing", "completed", "failed", "refunded"],
        default: "pending",
      },
      paymentMethod: {
        type: String,
        enum: ["razorpay", "stripe", "bank_transfer", "upi"],
      },
      transactionId: String,
      paymentDate: Date,
      invoiceNumber: String,
    },

    // Campaign Status & Tracking
    status: {
      type: String,
      enum: [
        "draft",
        "active",
        "in_progress",
        "completed",
        "cancelled",
        "paused",
      ],
      default: "draft",
    },

    // Campaign Lifecycle
    lifecycle: {
      createdAt: {
        type: Date,
        default: Date.now,
      },
      startDate: Date,
      endDate: Date,
      completedAt: Date,
      lastUpdated: {
        type: Date,
        default: Date.now,
      },
    },

    // // Metadata
    // metadata: {
    //   createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    //   },
    //   step: {
    //     type: Number,
    //     min: 1,
    //     max: 7,
    //     default: 1,
    //   },
    //   isComplete: {
    //     type: Boolean,
    //     default: false,
    //   },
    //   tags: [String],
    //   notes: String,
    // },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes for better performance
campaignSchema.index({ campaignId: 1 });
campaignSchema.index({ "brandDetails.brandEmail": 1 });
campaignSchema.index({ "metadata.createdBy": 1 });
campaignSchema.index({ status: 1 });
campaignSchema.index({ "lifecycle.createdAt": -1 });

// Virtual for total budget calculation
campaignSchema.virtual("calculatedBudget").get(function () {
  return this.payment.finalAmount + this.payment.platformFee;
});

// Corrected pre-save middleware
campaignSchema.pre("save", function (next) {
  this.lifecycle.lastUpdated = new Date();

  this.creators.totalCreators = this.creators.shortlistedCreators.length;
  this.creators.selectedCreators = this.creators.shortlistedCreators.filter(
    (creator) => creator.status === "selected"
  ).length;

  if (this.payment.totalAmount) {
    this.payment.platformFee = Math.round(this.payment.totalAmount * 0.1);
    this.payment.finalAmount = this.payment.totalAmount;
  }

  next();
});

export default mongoose.model("Campaign", campaignSchema);
