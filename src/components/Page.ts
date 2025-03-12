import { Component } from './base/Component';
import { IEvents } from './base/events';
import { ensureElement } from '../utils/utils';

interface IPage {
	catalog: HTMLElement[];
	locked: boolean;
	counter: number;
}

export class Page extends Component<IPage>{
	protected _catalog: HTMLElement;
	protected _wrapper: HTMLElement;
	protected _counter: HTMLElement;
	protected _basket: HTMLElement;

	constructor(container: HTMLElement, protected events: IEvents) {
		super(container);
		this._catalog = ensureElement<HTMLElement>('.catalog__items');
		this._basket = ensureElement<HTMLElement>('.header__basket');
		this._counter = ensureElement<HTMLElement>('.header__basket-counter');
		this._wrapper = ensureElement<HTMLElement>('.page__wrapper');

		this._basket.addEventListener('click', () => {
			events.emit('bids:open');
		});
	}

	set counter(value: number) {
		this.setText(this._counter, value);
	}

	set catalog(value: HTMLElement[]) {
		this._catalog.replaceChildren(...value);
	}

	set locked(value: boolean) {
		if (value) {
			this._wrapper.classList.add('page__wrapper_locked');
		}
		else {
			this._wrapper.classList.remove('page__wrapper_locked');
		}
	}
}