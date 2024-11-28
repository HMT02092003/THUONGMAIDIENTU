"use client";

import { useRouter } from 'next/navigation';
import MainLayout from "../main-layout"
import ProfileManagement from '../../components/profileManagement/profileManagement';


export default function ProfileManagementPage() {

  return (
    <MainLayout>
      <ProfileManagement />
    </MainLayout>
  );
};
