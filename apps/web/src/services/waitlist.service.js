import { supabase } from "./supabase";

/**
 * Service to handle waitlist database operations via Supabase
 */
export const waitlistService = {
  /**
   * Submits an email to the waitlist Supabase table.
   * @param {string} email
   * @returns {Promise<{success: boolean, message: string}>}
   */
  submitEmail: async (email) => {
    try {
      const trimmedEmail = email.trim().toLowerCase();

      const { error } = await supabase
        .from("waitlist")
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

      // Handle Postgres unique constraint violation
      if (err.code === "23505") {
        console.log("Email already registered!");
      }

      // Handle table not found error
      if (err.code === "42P01") {
        console.log(
          "Waitlist table does not exist. Please create a 'waitlist' table in Supabase with an 'email' column.",
        );
      }

      console.log(
        err.message || "Failed to join the waitlist. Please try again.",
      );
    }
  },
};
