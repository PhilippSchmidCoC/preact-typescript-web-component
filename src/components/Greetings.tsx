import register from 'preact-custom-element';
import {h} from 'preact';

const Greeting = ({name = 'World'}) => <p>Hello, {name}!</p>;

register(Greeting, 'x-greeting', ['name']);
