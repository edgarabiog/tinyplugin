(function () {
	"use strict";
	var langs = ["de", "de_AT", "de_DE", "de_LU", "de_CH", "de_LI"];
	langs.forEach(function (lang) {
		tinymce.addI18n(lang, {
			"lance_save": "Speichern ",
			"lance_cancel": "Abbrechen",
			"lance_edit": "Bearbeitung",
			"lance_reply": "antworten",
			"lance_delete": "löschen",
			"lance_resolve": "gelöst",
			"lance_reopen": "wieder öffnen",
			"lance_delete-resolve": "löschen/gelöst",
			"lance_comment": "Kommentar speichern",
			"lance_comments": "Kommentare",
			"lance_comments_by": "Kommentare von",
			"lance_comments_by": "Kommentare von",
			"lance_by": "von",
			"lance_filter_by": "Filtern Sie nach Text oder Autor",
			"lance_1 minute ago": "vor 1 Minute",
			"lance_minutes ago": "vor %d Minuten",
			"lance_on date": "am %MMM %d",
			"lance_on time": "am %hh:%mm",
			"lance_on full date": "am %F",
			"lance_now": "jetzt",
			"lance_on": "am",
			"lance_months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			"lance_full_months": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
			"lance_insert comment": "Kommentar einfügen",
			"lance_enter comment": "Geben Sie einen Kommentar ein",
			"lance_delete this annotation?": "Bemerkung löschen?",
			"lance_delete this comment?": "Kommentar löschen?",
			"lance_enter your comment": "Geben Sie Ihren Kommentar ein",
			"lance_reply to this comment": "Auf diesen Kommentar antworten",
			"lance_Insert annotation": "Insert annotation"
		});
	});
}());