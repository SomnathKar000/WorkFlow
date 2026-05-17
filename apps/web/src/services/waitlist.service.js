import { supabase } from "./supabase";

/**
 * Service to handle waitlist database operations via Supabase
 */
export const waitlistService = {
  /**
   * Submits an email to the early_access Supabase table.
   * @param {string} email
   * @returns {Promise<{success: boolean, message: string}>}
   */
  submitEmail: async (email) => {
    try {
      const trimmedEmail = email.trim().toLowerCase();

      const { error } = await supabase
        .from("early_access")
        .insert([{ email: trimmedEmail }]);

      if (error) {
        throw error;
      }

      return {
        success: true,
        message: "You've been added to the waitlist!",
      };
    } catch (err) {
      console.error("Supabase insert error:", err);

      let friendlyMessage = "Failed to join the waitlist. Please try again.";

      // Handle unique constraint violation (duplicate email)
      if (err.code === "23505") {
        friendlyMessage = "This email is already registered on our waitlist!";
      }
      // Handle table not found
      else if (err.code === "42P01") {
        friendlyMessage = "Table 'early_access' does not exist in the database.";
      }
      else if (err.message) {
        friendlyMessage = err.message;
      }

      return {
        success: false,
        message: friendlyMessage,
      };
    }
  },
};
