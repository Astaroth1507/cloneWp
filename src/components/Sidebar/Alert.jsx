import React from "react";
import Icon from "components/Icon";

const alerts = [
	<div className="sidebar__alert sidebar__alert--info">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="notification" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Recibir notificaciones de mensajes </p>
			<p className="sidebar__alert-text"> Activar notificaciones de escritorio </p>
		</div>
	</div>,
	<div className="sidebar__alert sidebar__alert--danger">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="notification" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Telefono con Bateria Baja </p>
			<p className="sidebar__alert-text">
				Carga tu telefono para usar Whatsapp.
			</p>
		</div>
	</div>,
	<div className="sidebar__alert sidebar__alert--warning">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="noWifi" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Telefono no conectado</p>
			<p className="sidebar__alert-text">
				Revisa la conexion de tu dispositivo.{" "}
				<a
					className="underline"
					href="https://faq.whatsapp.com/web/troubleshooting/cant-connect-to-whatsapp-web-or-desktop/"
					target="_blank"
				>
					{" "}
					saber más.{" "}
				</a>
			</p>
		</div>
	</div>,
];
const randomAlert = alerts.sort(() => 0.5 - Math.random())[0];

const Alert = () => {
	return <>{randomAlert}</>;
};

export default Alert;
