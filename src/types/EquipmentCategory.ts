// Interface for a generic reference item used in various places
interface EquipmentItem {
  index: string;
  name: string;
  url: string;
}

// Interface for equipment category which includes an array of equipment items
interface EquipmentCategory {
  index: string;
  name: string;
  equipment: EquipmentItem[];
  url: string;
}

export default EquipmentCategory;