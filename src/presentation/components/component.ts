export abstract class Component {
	protected abstract $container: Element;
	protected abstract onChange?: (arg: never) => void;
	public abstract render(): void;
}
