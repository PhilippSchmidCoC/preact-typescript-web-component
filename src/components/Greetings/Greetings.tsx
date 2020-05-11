import register from 'preact-custom-element';
import {h} from 'preact';

const Greeting = ({name = 'World'}) => <p data-cy="greetings-name">Hello, {name}!</p>;

register(Greeting, 'x-greeting', ['name']);
