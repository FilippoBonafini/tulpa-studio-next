import PageIntro from "@/components/PageIntro";
import { client } from "../../../sanity/lib/client";



export const metadata = {
  title: 'Tulpa Studio | Rental',
  description: 'Sfoglia il catalogo con le varie attrezzature disponibili e trova la soluzione che fa al caso tuo.',
}

async function getData() {
  const data = await client.fetch(`*[_type == "attrezzatura"]`)
}

const RentalPage = () => {
  return (
    <>
      <PageIntro eyebrow="Rental" title="Ottieni un preventivo in base all'attrezzatura di cui hai bisogno">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus perspiciatis, maiores nostrum error quo exercitationem consequatur natus illum ipsa vitae molestias at amet praesentium repudiandae delectus totam nobis esse!
        </p>
      </PageIntro>
    </>
  );
};

export default RentalPage();


