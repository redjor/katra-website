export default function HomepageExplain() {
  function categoriesBlock() {
    const categories = [
      "Produit",
      "Marque",
      "Scénographie",
      "Graphsime",
      "Street Art",
      "Urbain",
    ];
    return (
      <>
        {categories.map((category: string, index: number) => (
          <>
            {index !== 0 && (
              <span className="text-sm font-light text-gold">•</span>
            )}
            <span>{category}</span>
          </>
        ))}
      </>
    );
  }

  return (
    <div className="w-full px-5 md:px-16">
      <div className="relative mx-auto">
        <div className="py-48">
          <h1 className="mx-auto max-w-3xl text-center text-xl font-medium text-aluminium">
            Chez Katra, le design joint l’utile à l’agréable, l’usage à la
            raison, questionnant la société à différents étages. Un outil de
            transformation individuelle et collective à la portée du plus grand
            nombre.
          </h1>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-3">
            {categoriesBlock()}
          </div>
        </div>
      </div>
    </div>
  );
}
