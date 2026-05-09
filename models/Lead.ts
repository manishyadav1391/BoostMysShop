import mongoose, { Schema, models } from "mongoose";

const LeadSchema = new Schema(
    {
        name: String,

        phone: {
            type: String,
            required: true,
            index: true,
        },

        shop: String,

        source: String,

        status: {
            type: String,
            default: "new",
        },

        notes: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

export const Lead =
    models.Lead || mongoose.model("Lead", LeadSchema);