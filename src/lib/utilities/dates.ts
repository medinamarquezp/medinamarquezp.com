export const formatDate = (date: Date, options: Intl.DateTimeFormatOptions) => {
	return date.toLocaleDateString('es-ES', options);
};

export const formatTimelineDate = (date: Date | null) => {
	if (date) {
		return formatDate(date, {
			year: 'numeric',
			month: 'short'
		});
	}
	return 'Actualmente';
};
