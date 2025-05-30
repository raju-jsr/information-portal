const aSyncHandler = require("express-async-handler");
const { T1, T2 } = require("../models/bikeModel");

// -------------------------------------------------------------------
// @Des - Get list of all the bikes
// @Route - GET /portal/bike/details
// @Access - Public
// -------------------------------------------------------------------

const getAllBikeDetails = aSyncHandler(async (req, res) => {
  const bikeDetails = await T1.find();
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(200).json(bikeDetails);
});

// -------------------------------------------------------------------
// @Des - Create a new entry of bike
// @Route - POST /portal/bike/details
// @Access - Private
// -------------------------------------------------------------------

const createBikeEntry = aSyncHandler(async (req, res) => {
  const {
    BIKE_MODEL,
    PARENT_COMPANY,
    LAUNCH_YEAR,
    EX_SHOWROOM_PRICE,
    FUEL_TYPE,
    BIKE_TYPE,
  } = req.body;

  if (
    !BIKE_MODEL ||
    !PARENT_COMPANY ||
    !LAUNCH_YEAR ||
    !EX_SHOWROOM_PRICE ||
    !FUEL_TYPE ||
    !BIKE_TYPE
  ) {
    res.status(400);
    throw new Error("All Fields are Mandatory");
  }

  const bikeEntry = await T1.create({
    BIKE_MODEL: BIKE_MODEL,
    PARENT_COMPANY: PARENT_COMPANY,
    LAUNCH_YEAR: LAUNCH_YEAR,
    EX_SHOWROOM_PRICE: EX_SHOWROOM_PRICE,
    FUEL_TYPE: FUEL_TYPE,
    BIKE_TYPE: BIKE_TYPE,
  });

  res.status(200).json(bikeEntry);
});

// -------------------------------------------------------------------
// @Des - Update entry of bike
// @Route - PUT /portal/bike/details/:id
// @Access - Private
// -------------------------------------------------------------------

const updateBikeEntry = aSyncHandler(async (req, res) => {
  const {
    BIKE_MODEL,
    PARENT_COMPANY,
    LAUNCH_YEAR,
    EX_SHOWROOM_PRICE,
    FUEL_TYPE,
    BIKE_TYPE,
  } = req.body;

  if (
    !BIKE_MODEL ||
    !PARENT_COMPANY ||
    !LAUNCH_YEAR ||
    !EX_SHOWROOM_PRICE ||
    !FUEL_TYPE ||
    !BIKE_TYPE
  ) {
    res.status(400);
    throw new Error("All Fields are Mandatory");
  }

  const bikeDetail = await T1.findById(req.params.id);

  if (!bikeDetail) {
    res.status(404);
    throw new Error("Bike Not Present in Database");
  }

  const updateBikeDetail = await T1.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateBikeDetail);
});

// -------------------------------------------------------------------
// @Des - Delete an entry of bike
// @Route - DELETE /portal/bike/details/:id
// @Access - Private
// -------------------------------------------------------------------

const deleteBikeEntry = aSyncHandler(async (req, res) => {
  const bikeDetail = await T1.findById(req.params.id);

  if (!bikeDetail) {
    res.status(404);
    throw new Error("Bike Model not found in Database");
  }

  await T1.deleteOne({ _id: req.params.id });

  res.status(200).json(bikeDetail);
});

// -------------------------------------------------------------------
// @Des - Get Bike Specs
// @Route - GET /portal/bike/specs/:id
// @Access - Public
// -------------------------------------------------------------------

const getBikeSpecs = aSyncHandler(async (req, res) => {
  const bikeDetail = await T2.findById(req.params.id);

  if (!bikeDetail) {
    res.status(404);
    throw new Error("Bike Model Not present in Database");
  }

  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(200).json(bikeDetail);
});

// -------------------------------------------------------------------
// @Des - Create a new entry of bike specifications
// @Route - POST /portal/bike/specs
// @Access - Private
// -------------------------------------------------------------------

const createBikeSpecEntry = aSyncHandler(async (req, res) => {
  const {
    BIKE_MODEL,
    CUBIC_CAPACITY,
    WEIGHT,
    TORQUE,
    HORSEPOWER,
    MILEAGE,
    GEARS,
  } = req.body;

  if (!BIKE_MODEL) {
    res.status(400);
    throw new Error("Please enter the Bike Model");
  }

  const bikeSpecEntry = await T2.create({
    BIKE_MODEL: BIKE_MODEL,
    CUBIC_CAPACITY: CUBIC_CAPACITY,
    WEIGHT: WEIGHT,
    TORQUE: TORQUE,
    HORSEPOWER: HORSEPOWER,
    MILEAGE: MILEAGE,
    GEARS: GEARS,
  });

  res.status(200).json(bikeSpecEntry);
});

// -------------------------------------------------------------------
// @Des - Update entry of bike's specs
// @Route - PUT /portal/bike/specs/:id
// @Access - Private
// -------------------------------------------------------------------

const updateBikeSpecEntry = aSyncHandler(async (req, res) => {
  const {
    BIKE_MODEL,
    CUBIC_CAPACITY,
    WEIGHT,
    TORQUE,
    HORSEPOWER,
    MILEAGE,
    GEARS,
  } = req.body;

  if (!BIKE_MODEL) {
    res.status(400);
    throw new Error("Please enter the Bike Model");
  }

  const bikeDetail = await T2.findById(req.params.id);

  if (!bikeDetail) {
    res.status(404);
    throw new Error("Bike Model Not present in Database");
  }

  const updatedBikeSpec = await T2.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedBikeSpec);
});

// -------------------------------------------------------------------
// @Des - Delete an entry of bike
// @Route - DELETE /portal/bike/spec/:id
// @Access - Private
// -------------------------------------------------------------------

const deleteBikeSpec = aSyncHandler(async (req, res) => {
  const bikeDetail = await T2.findById(req.params.id);

  if (!bikeDetail) {
    res.status(404);
    throw new Error("Bike Model not found in Database");
  }

  await T2.deleteOne({ _id: req.params.id });

  res.status(200).json(bikeDetail);
});

module.exports = {
  getAllBikeDetails,
  createBikeEntry,
  updateBikeEntry,
  getBikeSpecs,
  createBikeSpecEntry,
  updateBikeSpecEntry,
  deleteBikeSpec,
  deleteBikeEntry,
};
