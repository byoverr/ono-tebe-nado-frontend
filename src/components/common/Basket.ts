import { Component } from '../base/Component';
import { IEvents } from '../base/events';
import { createElement, ensureElement, formatNumber } from '../../utils/utils';

interface IBasketView {
	items: HTMLElement[];
	total: number;
	selected: string[];
}
export class Basket extends Component<IBasketView> {
	protected _list: HTMLElement;
	protected _total: HTMLElement;
	protected _button: HTMLButtonElement;

	constructor(container: HTMLElement, protected events: IEvents) {
		super(container);

		this._list = ensureElement<HTMLElement>('.basket__list', container);
		this._total = this.container.querySelector('.basket__total');
		this._button = this.container.querySelector('.basket__action');

		if (this._button) {
			this._button.addEventListener('click', () => {
				events.emit('order:open');
			})
		}
		this.items = [];

	}

	set items(items: HTMLElement[]) {
		if (items.length) {
			this._list.replaceChildren(...items);
		} else {
			this._list.replaceChildren(createElement<HTMLElement>('p', {textContent:
					'Корзина пуста'}));
		}
	}

	set selected(items: string[]) {
		if (items.length) {
			this.setDisabled(this._button, false);
		} else {
			this.setDisabled(this._button, true);
		}
	}

	set total(total: number) {
		this.setText(this._total, formatNumber(total));
	}
}