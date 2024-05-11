{buttonslist.map((item, index) => (
    <li key={index}>
      <img
        className=" cursor-pointer h-[30px] hover:scale-[1.1]"
        src={item.path}
        alt=""
      />
    </li>
  ))}