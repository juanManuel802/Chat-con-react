import Mensag from './Mensg';

export default function MensageOut({ mensajes }) {
  return (
    <div className="cont-msgs">
      {mensajes.map((mensaje, index) => (
        <Mensag key={index} mensaje={mensaje} />
      ))}
    </div>
  );
}
