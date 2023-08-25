"use client"

import Banner from "@/components/Banner/Banner"
import ContactUs from "@/components/ContactUs/ContactUs"
import EmpoweringDonors from "@/components/EmpoweringDonors/EmpoweringDonors"
import GetInTouch from "@/components/GetInTouch/GetInTouch"
import JoinUs from "@/components/JoinUs/JoinUs"
import MedicalInsights from "@/components/MedicalInsights/MedicalInsights"
import WorkUS from "@/components/Work/Work"
// import WorkUS from "@/components/Work/Work"


export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <MedicalInsights></MedicalInsights>
      <EmpoweringDonors></EmpoweringDonors>
      <WorkUS></WorkUS>
      <JoinUs></JoinUs>
      <ContactUs></ContactUs>
      <GetInTouch></GetInTouch>
    </main>
  )
}
