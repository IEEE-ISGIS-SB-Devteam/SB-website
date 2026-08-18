// src/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      
    }
  }
  
  // Expose `process.env` with the above type
  declare var process: {
    readonly env: NodeJS.ProcessEnv;
  };
  