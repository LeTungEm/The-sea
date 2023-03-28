function AnimalItem({name, src}) {
    return (
        <div className="mx-auto relative w-full hover:-translate-y-5 hover:shadow-gray-900 hover:shadow-2xl duration-300">
            <img className="object-cover md:object-bottom h-80 w-full" src={src} />
            <div className="absolute border-b-2 pl-3 text-2xl font-bold bottom-3 right-5">{name}</div>
        </div>
    );
}

export default AnimalItem