import { sampleProvinceData, Province } from "./Province";

describe("province", () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", () => {
    expect(asia.shortfall).toBe(5);
  });

  it("profit", () => {
    expect(asia.profit).toBe(230);
  });

  it("change production", () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toBe(-6);
    expect(asia.profit).toBe(292);
  });

  it("zero demand", () => {
    asia.demand = 0;
    expect(asia.shortfall).toBe(-25);
    expect(asia.profit).toBe(0);
  });

  it("negative demand", () => {
    asia.demand = -1;
    expect(asia.shortfall).toBe(-26);
    expect(asia.profit).toBe(-10);
  });

  it("empty string demand", () => {
    asia.demand = "";
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});

describe("no producers", () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });

  it("shortfall", () => {
    expect(noProducers.shortfall).toBe(30);
  });

  it("profit", () => {
    expect(noProducers.profit).toBe(0);
  });
});
