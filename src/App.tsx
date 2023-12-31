import "./App.css";
import MultiSelect from "./components/MultiSelect";

type Item = {
  label: string;
  value: string;
};

const items: Item[] = [
  { label: "Abra", value: "Abra" },
  { label: "Agusan del Norte", value: "Agusan del Norte" },
  { label: "Agusan del Sur", value: "Agusan del Sur" },
  { label: "Aklan", value: "Aklan" },
  { label: "Albay", value: "Albay" },
  { label: "Antique", value: "Antique" },
  { label: "Apayao", value: "Apayao" },
  { label: "Aurora", value: "Aurora" },
  { label: "Basilan", value: "Basilan" },
  { label: "Bataan", value: "Bataan" },
  { label: "Batanes", value: "Batanes" },
  { label: "Batangas", value: "Batangas" },
  { label: "Benguet", value: "Benguet" },
  { label: "Biliran", value: "Biliran" },
  { label: "Bohol", value: "Bohol" },
  { label: "Bukidnon", value: "Bukidnon" },
  { label: "Bulacan", value: "Bulacan" },
  { label: "Cagayan", value: "Cagayan" },
  { label: "Camarines Norte", value: "Camarines Norte" },
  { label: "Camarines Sur", value: "Camarines Sur" },
  { label: "Camiguin", value: "Camiguin" },
  { label: "Capiz", value: "Capiz" },
  { label: "Catanduanes", value: "Catanduanes" },
  { label: "Cavite", value: "Cavite" },
  { label: "Cebu", value: "Cebu" },
  { label: "Compostela Valley", value: "Compostela Valley" },
  { label: "Cotabato", value: "Cotabato" },
  { label: "Davao de Oro", value: "Davao de Oro" },
  { label: "Davao del Norte", value: "Davao del Norte" },
  { label: "Davao del Sur", value: "Davao del Sur" },
  { label: "Davao Occidental", value: "Davao Occidental" },
  { label: "Davao Oriental", value: "Davao Oriental" },
  { label: "Dinagat Islands", value: "Dinagat Islands" },
  { label: "Eastern Samar", value: "Eastern Samar" },
  { label: "Guimaras", value: "Guimaras" },
  { label: "Ifugao", value: "Ifugao" },
  { label: "Ilocos Norte", value: "Ilocos Norte" },
  { label: "Ilocos Sur", value: "Ilocos Sur" },
  { label: "Iloilo", value: "Iloilo" },
  { label: "Isabela", value: "Isabela" },
  { label: "Kalinga", value: "Kalinga" },
  { label: "La Union", value: "La Union" },
  { label: "Laguna", value: "Laguna" },
  { label: "Lanao del Norte", value: "Lanao del Norte" },
  { label: "Lanao del Sur", value: "Lanao del Sur" },
  { label: "Leyte", value: "Leyte" },
  { label: "Maguindanao", value: "Maguindanao" },
  { label: "Marinduque", value: "Marinduque" },
  { label: "Masbate", value: "Masbate" },
  { label: "Misamis Occidental", value: "Misamis Occidental" },
  { label: "Misamis Oriental", value: "Misamis Oriental" },
  { label: "Mountain Province", value: "Mountain Province" },
  { label: "Negros Occidental", value: "Negros Occidental" },
  { label: "Negros Oriental", value: "Negros Oriental" },
  { label: "Northern Samar", value: "Northern Samar" },
  { label: "Nueva Ecija", value: "Nueva Ecija" },
  { label: "Nueva Vizcaya", value: "Nueva Vizcaya" },
  { label: "Occidental Mindoro", value: "Occidental Mindoro" },
  { label: "Oriental Mindoro", value: "Oriental Mindoro" },
  { label: "Palawan", value: "Palawan" },
  { label: "Pampanga", value: "Pampanga" },
  { label: "Pangasinan", value: "Pangasinan" },
  { label: "Quezon", value: "Quezon" },
  { label: "Quirino", value: "Quirino" },
  { label: "Rizal", value: "Rizal" },
  { label: "Romblon", value: "Romblon" },
  { label: "Samar", value: "Samar" },
  { label: "Sarangani", value: "Sarangani" },
  { label: "Siquijor", value: "Siquijor" },
  { label: "Sorsogon", value: "Sorsogon" },
  { label: "South Cotabato", value: "South Cotabato" },
  { label: "Southern Leyte", value: "Southern Leyte" },
  { label: "Sultan Kudarat", value: "Sultan Kudarat" },
  { label: "Sulu", value: "Sulu" },
  { label: "Surigao del Norte", value: "Surigao del Norte" },
  { label: "Surigao del Sur", value: "Surigao del Sur" },
  { label: "Tarlac", value: "Tarlac" },
  { label: "Tawi-Tawi", value: "Tawi-Tawi" },
  { label: "Zambales", value: "Zambales" },
  { label: "Zamboanga del Norte", value: "Zamboanga del Norte" },
  { label: "Zamboanga del Sur", value: "Zamboanga del Sur" },
  { label: "Zamboanga Sibugay", value: "Zamboanga Sibugay" },
];

function App() {
  const handleSelect = (item: Item) => {
    console.log("select!", item);
  };

  const handleDeselect = (item: Item) => {
    console.log("deselect!", item);
  };

  const handleSelectAll = (items: Item[]) => {
    console.log("select all", items);
  };

  return (
    <div className="app-container">
      <MultiSelect
        items={items}
        onSelect={handleSelect}
        onDeselect={handleDeselect}
        onSelectAll={handleSelectAll}
        searchPlaceHolder="Search Provinces"
      />
    </div>
  );
}

export default App;
