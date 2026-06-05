import express from "express";
import {
    getTransactions,
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
    analyzeTransactions,
} from "../controllers/transactionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.get("/", getTransactions);
router.post("/", createTransaction);

// Analysis endpoints (static) should come before parameterized routes
router.post("/analyze", analyzeTransactions);
// Accept British spelling as an alias
router.post("/analyse", analyzeTransactions);

// Parameter routes (keep static analysis routes above to avoid collisions)
router.get("/:id", getTransactionById);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

export default router;
