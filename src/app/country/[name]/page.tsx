import DetailsPage from "./_components/DetailsPage";

export default async function CountryDetail({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const code = (await params).name;

  return <DetailsPage code={code} />;
}
