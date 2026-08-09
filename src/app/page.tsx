// src/app/page.tsx

import { ClientPage } from "./MainPage";

// Это Server Component - выполняется на сервере
export default async function HomePage() {
  // Получаем данные на сервере
//   const serverData = await getServerData();
  
  return <ClientPage />;
}
