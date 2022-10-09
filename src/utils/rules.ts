interface Rule {
  required: boolean;
  message: string;
}

const rules = {
  required: (message = 'Required field'): Rule => ({
    required: true,
    message,
  }),
};

export { rules };
