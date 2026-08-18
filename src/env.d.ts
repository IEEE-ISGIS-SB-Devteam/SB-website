// src/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      readonly REACT_APP_EMAILJS_USER_ID: string;
      readonly REACT_APP_EMAILJS_SERVICE_ID: string;
      readonly REACT_APP_EMAILJS_TEMPLATE_ID: string;
      // add more REACT_APP_... vars here as needed
    }
  }
  
  // Expose `process.env` with the above type
  declare var process: {
    readonly env: NodeJS.ProcessEnv;
  };
  