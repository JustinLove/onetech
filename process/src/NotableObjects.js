"use strict";

const MonumentCall = {
  key: "monumentCall",
  filter(objects) {
    return objects.filter(o => o.isMonumentCall());
  }
}

const MonumentStep = {
  key: "monumentStep",
  filter(objects) {
    return objects.filter(o => o.isMonumentStep());
  }
}

const FamUse = {
  key: "famUse",
  filter(objects) {
    return objects.filter(o => o.isFamUse());
  }
}

const LargeTapout = {
  key: "largeTapout",
  filter(objects) {
    return objects.filter(o => o.isLargeTapout());
  }
}

const NotableObjects = {
  filters: [
    MonumentCall,
    MonumentStep,
    FamUse,
    LargeTapout,
  ],
  jsonData(objects) {
    return this.filters.map(f => {
      return {
        key: f.key,
        ids: f.filter(objects).map(o => o.id),
      };
    });
  }
}

module.exports = NotableObjects;
