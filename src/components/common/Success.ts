import { Component } from '../base/Component';
import { ensureElement } from '../../utils/utils';

interface ISuccess {
	total: number;
}

interface ISuccessAction {
		onClick: () => void;
}

export class Success extends Component<ISuccess> {
	protected _close: HTMLButtonElement;

	constructor(container: HTMLElement, actions: ISuccessAction) {
		super(container);

		this._close = ensureElement<HTMLButtonElement>('.state__action', this.container);

		if (actions.onClick) {
			this._close.addEventListener('click', actions.onClick);
		}
	}
}