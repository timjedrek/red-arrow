/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// const functions = require("firebase-functions");
const { onCall } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
admin.initializeApp();

// exports.addAdminRole = functions.https.onCall((data, context) => {
//   // check request is made by an admin
//   if (context.auth.token.admin !== true) {
//     return { error: "Only admins can add other admins." };
//   }
//   // get user and add custom claim (admin)
//   return admin
//     .auth()
//     .getUserByEmail(data.email)
//     .then((user) => {
//       return admin.auth().setCustomUserClaims(user.uid, {
//         admin: true,
//       });
//     })
//     .then(() => {
//       return {
//         message: `Success! ${data.email} has been made an admin`,
//       };
//     })
//     .catch((err) => err);
// });

exports.addAdminRoleSecondGen = onCall(async (request) => {
  try {
    if (!request.auth) {
      throw new Error("Unauthorized request: User must be logged in.");
    }

    if (!request.auth.token.admin) {
      throw new Error("Permission denied: Only admins can add other admins.");
    }

    const { email } = request.data;
    const auth = admin.auth();
    const user = await auth.getUserByEmail(email);

    await auth.setCustomUserClaims(user.uid, { admin: true });

    return { message: `Success! ${email} has been granted admin privileges.` };
  } catch (error) {
    console.error("Error in addAdminRoleSecondGen:", error);
    return { error: error.message || "Failed to add admin role." };
  }
});
