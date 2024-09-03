type OverviewSectionProps = {
  overview: string;
};

const OverviewSection = ({ overview }: OverviewSectionProps) => {
  return <section className="flex flex-col gap-2 font-bold text-h6 font-body">
    <h3 className="text-secondary font-extrabold text-h5 font-title">Overview</h3>
    <p className="text-secondary-40">{overview}</p>
  </section>
};

export default OverviewSection;