import React, { useEffect, useRef, useState } from 'react';

const createUI = (App) => new App.AnnotationsUI();

export default function Sidebar(props) {
	// Will hold a ref to the sidebar DOM element
	const sidebarRef = useRef(null);
	// The AnnotationsUI instance
	const [ui, setUI] = useState(null);

	useEffect(() => {
		if (!props.lance || !sidebarRef.current) {
			return;
		}
		if (!ui) {
			const u = createUI(props.App);
			u.init({
				container: sidebarRef.current,
				generateUI: true,
				alignCommentsToEditor: true,
				owner: props.lance.getAnnotations()
			})
			setUI(u);
		}
		else {
			ui.setOwner(props.lance.getAnnotations());
		}
	}, [sidebarRef, ui, props.lance, props.App])
	return (
		<div className='sidebar' ref={sidebarRef}>
		</div>
	);
}