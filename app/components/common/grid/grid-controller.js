class GridController {
  constructor() {

  }

  renderField(value) {
    const boolValue = { true: 'כן', false: 'לא'};

    return typeof value === 'boolean'
      ? boolValue[value]
      : value;
  }

  shouldShow() {
    return (row) => {
      console.log(this.filter);
      let inFilter = true;

      Object.keys(this.filter).forEach((key) => {
        // Only check filter if filter key has value (not on placeholder)
        if (Boolean(this.filter[key])) {
          inFilter = inFilter && String(row[key]).toLowerCase() === String(this.filter[key]).toLowerCase();
        }
      });

      return inFilter;
    };
  }
}

export default GridController;
