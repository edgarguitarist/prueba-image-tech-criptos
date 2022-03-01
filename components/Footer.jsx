export function Footer({ ...props }) {
  const { bottom } = props

  const defaultStyle =
    "flex flex-center justify-center w-full py-6 mt-8 border-t-2 border-t-black bg-gray-900"
  return (
    <footer
      className={bottom ? defaultStyle : defaultStyle + " absolute bottom-0"}
    >
      <div className="text-white font-semibold">
        Desarrollado por Edgar Laz - 2022
      </div>
    </footer>
  )
}
