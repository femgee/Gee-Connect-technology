// Input validation utilities
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateContactForm = (data: {
  name: string;
  email: string;
  message: string;
}): ValidationResult => {
  const errors: string[] = [];

  // Name validation
  if (!data.name.trim()) {
    errors.push('Name is required');
  } else if (data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (data.name.trim().length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Email validation
  if (!data.email.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  // Message validation
  if (!data.message.trim()) {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  } else if (data.message.trim().length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};