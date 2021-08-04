/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"

export default function Partners() {
  return (
    <Flex sx={{ flexWrap: "wrap", justifyContent: "center" }}>
      <StaticImage
        src="../images/partners/espacio-4.png"
        alt={"Espacio 4"}
        width={120}
        placeholder="none"
        formats={["AUTO", "WEBP", "AVIF"]}
        quality={100}
        objectFit="contain"
        sx={{ flexShrink: 0, m: 3 }}
      />
      <StaticImage
        src="../images/partners/ext-ucm.png"
        alt={"Extensión UCM"}
        width={120}
        placeholder="none"
        formats={["AUTO", "WEBP", "AVIF"]}
        quality={100}
        objectFit="contain"
        sx={{ flexShrink: 0, m: 3 }}
      />
      <StaticImage
        src="../images/partners/endemica.png"
        alt={"Revista Endémica"}
        width={200}
        placeholder="none"
        formats={["AUTO", "WEBP", "AVIF"]}
        quality={100}
        objectFit="contain"
        sx={{ flexShrink: 0, m: 3 }}
      />

      <StaticImage
        src="../images/partners/femgrafia.png"
        alt={"Femgrafía"}
        width={200}
        placeholder="none"
        formats={["AUTO", "WEBP", "AVIF"]}
        quality={100}
        objectFit="contain"
        sx={{ flexShrink: 0, m: 3 }}
      />

      <StaticImage
        src="../images/partners/casona-duao.png"
        alt={"Casa de la Cultura Duao"}
        width={120}
        placeholder="none"
        formats={["AUTO", "WEBP", "AVIF"]}
        quality={100}
        objectFit="contain"
        sx={{ flexShrink: 0, m: 3 }}
      />

      <StaticImage
        src="../images/partners/las-tinajas.png"
        alt={"Galpón Las Tinajas"}
        width={120}
        placeholder="none"
        formats={["AUTO", "WEBP", "AVIF"]}
        quality={100}
        objectFit="contain"
        sx={{ flexShrink: 0, m: 3 }}
      />

      <StaticImage
        src="../images/partners/teatro-san-javier.png"
        alt={"Teatro Municipal de San Javier"}
        width={120}
        placeholder="none"
        formats={["AUTO", "WEBP", "AVIF"]}
        quality={100}
        objectFit="contain"
        sx={{ flexShrink: 0, m: 3 }}
      />
    </Flex>
  )
}
