"use client"
import Banner from '@/components/Banner/Banner'
import ContactUs from '@/components/ContactUs/ContactUs'
import EmpoweringDonors from '@/components/EmpoweringDonors/EmpoweringDonors'
import GetInTouch from '@/components/GetInTouch/GetInTouch'
import MedicalInsights from '@/components/MedicalInsights/MedicalInsights'

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <MedicalInsights></MedicalInsights>
      <EmpoweringDonors></EmpoweringDonors>

      <ContactUs></ContactUs>
      <GetInTouch></GetInTouch>
    </main>
  )
}
