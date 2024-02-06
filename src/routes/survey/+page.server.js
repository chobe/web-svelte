import { fail } from '@sveltejs/kit';

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
        const description = data.get('description');
        const userid = cookies.get('userid');
        
        if (!userid) {
            return fail(401, {
                error: 'unauthorized'
            });
        }

        if (!description) {
            return fail(400, {
                error: 'description is required'
            });
        }

		// db.createTodo(cookies.get('userid'), data.get('description'));
	}
};
