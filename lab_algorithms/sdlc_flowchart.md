Start (Oval)
   ↓
Prompt for User ID (Rectangle)
   ↓
Prompt for Target Amount (Rectangle)
   ↓
Prompt for Target Date (Rectangle)
   ↓
Store Goal Data (Rectangle)
   ↓
Retrieve Savings Data (Rectangle)
   ↓
Calculate Progress (Rectangle)
   ↓
[Decision] Is goal met? (Diamond)
   ├─ Yes → Send congratulations (Rectangle) → End (Oval)
   └─ No  → [Decision] Is target date near? (Diamond)
                 ├─ Yes → Send reminder (Rectangle) → End (Oval)
                 └─ No  → No action needed (Rectangle) → End (Oval)
