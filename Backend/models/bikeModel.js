const mongoose = require("mongoose");

const bikeDetailsSchema = mongoose.Schema(
  {
    BIKE_MODEL: {
      type: String,
      required: [true, "Please add the Bike Model type"],
    },
    PARENT_COMPANY: {
      type: String,
      required: [true, "Please add the Company of Bike"],
    },
    LAUNCH_YEAR: {
      type: String,
      required: [true, "Please add the year when Bike was Launched"],
    },
    EX_SHOWROOM_PRICE: {
      type: String,
      required: [true, "Please add the Bike's Ex-Showroom Price"],
    },
    FUEL_TYPE: {
      type: String,
      required: [true, "Please add the Fuel type of Bike"],
    },
    BIKE_TYPE: {
      type: String,
      required: [true, "Please add the category bike belongs toF"],
    }
  },
  {
    timestamps: true,
  }
);

const bikeSpecSchema = mongoose.Schema(
  {
    BIKE_MODEL: {
      type: String,
      required: [true, "Please add the Bike Model type"],
    },
    CUBIC_CAPACITY: {
      type: String,
      required: [true, "Please add the Bike's Cubic Capacity"],
    },
    WEIGHT: {
      type: String,
      required: [true, "Please add the Bike's Weight"],
    },
    TORQUE: {
      type: String,
      required: [true, "Please add the Bike's Torque"],
    },
    HORSEPOWER: {
      type: String,
      required: [true, "Please add the Bike's Horsepower"],
    },
    MILEAGE: {
      type: String,
      required: [true, "Please add the Bike's Mileage"],
    },
    GEARS: {
      type: String,
      required: [true, "Please add the no of Gears in Bike"],
    },
  },
  {
    timestamps: true,
  }
);

const T1 = mongoose.model("bike_details", bikeDetailsSchema);
const T2 = mongoose.model("bike_specs", bikeSpecSchema);

module.exports = { T1, T2 };
