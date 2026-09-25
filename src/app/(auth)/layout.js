import AppWrapper from "@/components/(auth)/AppWrapper";

export const metadata = {
  title: "Victhaw Official Unity Cup",
  description: "The Battle of Champions",
};

export default function RootLayout({ children }) {
  return (
    <AppWrapper>
      <main>{children}</main>
    </AppWrapper>
  );
}
