type PropertySlugPageProps = {
  params: {
    slug: string;
  };
};

const PropertySlugPage = ({ params }: PropertySlugPageProps) => {
  return <div>PROPERTY {params.slug}</div>;
};

export default PropertySlugPage;
