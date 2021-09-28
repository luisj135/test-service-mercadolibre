import Image from 'next/image'

function ImageComponent({ src, alt, width = '100%', height = '100%', loading='eager', layout='fill'}) {
  return <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="none"
          quality={100}
          width={width}
          height={height}
          loading={loading}
      />
}

export default ImageComponent