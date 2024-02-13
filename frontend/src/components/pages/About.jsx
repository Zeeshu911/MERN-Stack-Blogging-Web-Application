import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut
          dolor dicta placeat, perferendis fuga eligendi molestias nobis odio
          quo maxime ipsam, exercitationem ipsum. Eius corporis qui repellat
          quis ipsam dolores quos illum maxime, quasi cumque itaque ratione
          exercitationem. Aliquid, autem quasi? Iusto officia, cum minus
          pariatur aspernatur aut corporis quis vero alias ullam! Ab corrupti
          quae deserunt tenetur corporis esse quisquam error quas? Id quidem
          totam, corrupti optio unde numquam harum illo voluptate enim fugiat
          excepturi officiis blanditiis obcaecati consectetur animi mollitia
          autem. Enim labore ipsam dolorem, ipsum ipsa velit. Laboriosam vel
          unde consequuntur odit veniam itaque placeat accusantium, ipsam odio,
          labore molestias perspiciatis nesciunt cum at sint velit minus
          provident, cumque eaque voluptatem adipisci quas ab. Possimus, esse!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          officia dolorum quo architecto animi mollitia vitae eligendi quia nemo
          corporis facilis beatae ipsum fugit, quaerat expedita officiis fugiat!
          Dolore totam consequuntur ea maxime architecto sit cumque excepturi
          voluptatibus voluptatem nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint
          ratione odit saepe aperiam, amet doloribus quisquam. Quisquam, dolorum
          doloremque!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, rem
          ratione quasi sequi hic dolorem quia, quos quod aliquid laudantium
          dolore in eveniet, natus illum eius ad quo inventore ipsum! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa
          provident quam quisquam velit corporis sint mollitia? Perspiciatis
          corrupti nostrum, at ex voluptatum optio voluptatem labore animi minus
          nesciunt expedita cupiditate, consequuntur cumque et, sequi incidunt
          nulla beatae modi porro sapiente unde dolores? At maiores laudantium
          consequatur quaerat, placeat facilis delectus ipsa incidunt. Eum
          voluptatem totam voluptates cumque cum ut modi porro, repellendus
          ratione eveniet earum! Dicta ut magni harum distinctio assumenda aut,
          eaque doloremque sed facere esse dignissimos doloribus nulla error
          quibusdam quo! Cum pariatur, quisquam temporibus repellat sint vitae
          autem ad quo! Animi laborum distinctio placeat illum ipsam!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          ullam vitae repudiandae soluta voluptate a odit voluptas dolore nam
          quasi optio consequatur itaque, mollitia labore sit. Eligendi,
          doloribus debitis, saepe aspernatur quasi ipsum obcaecati ipsa commodi
          ea labore ab dolor dolorum voluptatibus adipisci! At nobis minus
          voluptas fugiat rerum laboriosam.
        </p>
      </div>
    </article>
  );
};

export default About;
