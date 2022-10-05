interface Rule {
  required: boolean;
  message: string;
}

const rules = {
  required: (message: string): Rule => ({
    required: true,
    message,
  }),
};

export { rules };
