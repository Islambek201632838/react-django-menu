# Generated by Django 4.2.7 on 2023-11-16 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_api', '0003_remove_blog_contenttwo'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
    ]