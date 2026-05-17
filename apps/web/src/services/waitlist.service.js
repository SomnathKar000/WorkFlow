/**
 * Service to handle waitlist operations
 */
export const waitlistService = {
  /**
   * Submits an email to the waitlist.
   * @param {string} email
   * @returns {Promise<{success: boolean, message: string}>}
   */
  submitEmail: async (email) => {
    // In production, this would make an actual API call, e.g.:
    // const response = await fetch('/api/waitlist', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });
    // return response.json();

    // Mock API call to simulate latency and show the loader
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email) {
          reject(new Error("Email is required"));
          return;
        }
        resolve({
          success: true,
          message: "You've been added to the waitlist!"
        });
      }, 1000);
    });
  }
};
