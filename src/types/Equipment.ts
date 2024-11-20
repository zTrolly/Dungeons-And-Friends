// Interface for an equipment item within the equipment category
interface Equipment {
  index?: string;  // Optional shorthand index for searching
  level?: number;  // Optional level of the equipment
  name?: string;   // Optional name of the equipment
  url?: string;    // Optional URL for more details
}

// Interface for the equipment category response
interface EquipmentCategory {
  index?: string;        // Optional resource index for shorthand searching
  level?: number;        // Optional level of the referenced resource
  name?: string;         // Optional name of the referenced resource
  url?: string;          // Optional URL of the referenced resource
  equipment?: Equipment[]; // Optional array of equipment items
}

export default EquipmentCategory;