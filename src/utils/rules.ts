import moment, { Moment } from "moment";

export const rules = {
  required: (message: string) => ({
    required: false,
    message: message,
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      if (value.isSameOrAfter(moment())) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
