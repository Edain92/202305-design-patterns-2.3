# Structural Patterns

Tenemos varios challenges que se resuelven con un patrón estructural.

Diseña e implementa usando TypeScript los ejercicios, pensando en el patrón que resuelve el problema. 

1. Tenemos un sistema que tiene algunas funciones que son muy costosas y tardan mucho en ejecutarse. No podemos cambiar la lógica de dichas funciones. 
    *¿Cómo resolvemos el problema en TypeScript?* 
    *¿Que patrón de diseño nos ayuda?*
    Esta técnica es muy común en el mundo del software. *¿Cómo se llama?*
    *¿Conoces algo parecido en ReactJS?*
	
2. Estamos construyendo la aplicación para hacer el checkin de una aerolínea. Durante el flujo el usuario puede elegir diferentes opciones para complementar su billete. Puede elegir una o la combinación de varias:
    - Añadir maletas
    - Seleccionar asiento
    - Hacer Upgrade para ir en clase business
    - Contratar un seguro
    - Añadir comida
    
	Suponiendo que tenemos una instancia de una clase Ticket con algunos atributos del vuelo (code, origin, destination, date). 
	*¿Cómo implementarías en TypeScript el sistema para que dado un ticket podamos ir añadiendo estos extras?*
	*¿Qué patrón nos facilita la resolución del problema?*

3. Nos han contratado para crear una aplicación para la universidad online. Una entidad curso consta de diferentes elementos que pueden ir en cualquier nivel de jerarquía:
    - Post
    - Video
    - Podcast
    - Enlaces

Cada elemento aparte de tener información puede contener sub elementos de cualquier otro menos de si mismo. Por ejemplo:

    Un post aparte de tener título y descripción etc, puede contener un podcast o enlaces o videos o todo a la vez.
